import React, { useState } from "react";
import { X, ShoppingCart, Plus, Minus, Trash2, ShieldCheck, AlertCircle, CheckCircle, ArrowRight, Mail, Send, MessageSquare } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateCartQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    paymentMethod: "bank_transfer",
    agreement: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const [checkoutMethod, setCheckoutMethod] = useState<"email" | "whatsapp" | null>(null);
  const [whatsappMsgUrl, setWhatsappMsgUrl] = useState("");

  if (!isOpen) return null;

  const triggerCheckout = async (method: "email" | "whatsapp") => {
    if (subtotal < 99) {
      return; // Prevent submissions below minimum order
    }
    const tempErrors: { [key: string]: string } = {};
    let isValid = true;

    if (!form.name.trim()) {
      tempErrors.name = "Full name is required";
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
      tempErrors.email = "Valid institutional email is required";
      isValid = false;
    }
    
    if (!form.phone.trim() || form.phone.trim().length < 6) {
      tempErrors.phone = "Valid contact phone number is required";
      isValid = false;
    }
    if (!form.institution.trim()) {
      tempErrors.institution = "Institutional or research affiliation is required";
      isValid = false;
    }
    
    if (!form.agreement) {
      tempErrors.agreement = "You must accept the statutory compliance warning";
      isValid = false;
    }

    if (!isValid) {
      setErrors(tempErrors);
      return;
    }

    setIsSubmitting(true);
    setCheckoutMethod(method);

    const orderItemsText = cart
      .map(
        (item) =>
          `- ${item.product.name} (${item.product.size}, ${item.product.purity} Purity) x ${item.quantity} = £${(
            item.product.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const messageText = `🔬 *UK PEPTIDE LABS - PROCUREMENT INQUIRY*
----------------------------------------
*Principal Researcher:* ${form.name}
*Institutional Email:* ${form.email}
*Contact Phone:* ${form.phone}
*Research Affiliation:* ${form.institution}
*Preferred Payment:* ${form.paymentMethod === "bank_transfer" ? "Bank Transfer" : "Gift Card"}

*Order Details:*
${orderItemsText}

*Total Subtotal:* £${subtotal.toFixed(2)} GBP

*Compliance Verification:* I verify that these reference standard compounds are destined strictly for in-vitro research and laboratory testing, in compliance with UK laws. I understand they are strictly not for human administration.`;

    try {
      const contactInfo = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInstitution: ${form.institution}`;
      // Send email to admin
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `New Order from ${form.name} (${form.email})`,
          contactInfo,
          message: messageText,
          type: "order"
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send order email");
      }

      if (method === "whatsapp") {
        const whatsappUrl = `https://wa.me/447916999789?text=${encodeURIComponent(messageText)}`;
        setWhatsappMsgUrl(whatsappUrl);
        window.open(whatsappUrl, "_blank");
      }

      setIsSubmitted(true);
      clearCart();
    } catch (err) {
      console.error("Error submitting order:", err);
      alert("Failed to process order. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetDrawerState = () => {
    setIsCheckingOut(false);
    setIsSubmitted(false);
    setCheckoutMethod(null);
    setWhatsappMsgUrl("");
    setForm({
      name: "",
      email: "",
      phone: "",
      institution: "",
      paymentMethod: "bank_transfer",
      agreement: false,
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-modal="true" role="dialog">
      <div className="absolute inset-0 overflow-hidden">
        {/* Backdrop overlay */}
        <div
          onClick={resetDrawerState}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
        />

        {/* Panel Container */}
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md transform bg-white shadow-2xl transition-all duration-300 flex flex-col h-full border-l border-slate-100">
            
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-teal-50/10">
              <div className="flex items-center gap-2.5 text-slate-900">
                <div className="p-2 bg-teal-50 text-teal-700 rounded-xl">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-lg text-slate-900 leading-none">
                    {isCheckingOut ? "Research Verification" : "Your Research Cart"}
                  </h2>
                  <span className="text-[10px] font-mono text-slate-400 mt-1 block">
                    {isCheckingOut ? "SECURE SEC/COMPLIANCE CHANNEL" : `${cart.length} COMPOUNDS LOADED`}
                  </span>
                </div>
              </div>
              <button
                onClick={resetDrawerState}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {isSubmitted ? (
                /* SUCCESS SCREEN */
                <div className="text-center py-10 px-2 space-y-6 flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-700 shadow-sm animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  {checkoutMethod === "whatsapp" ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-2xl text-slate-900 leading-tight">
                          Redirected to WhatsApp!
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                          Your reference standard list has been locked and compiled under security code <strong className="font-mono text-teal-700">UKP-{Math.floor(100000 + Math.random() * 900000)}</strong>.
                        </p>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-sm mt-2">
                          We have attempted to open WhatsApp with your pre-filled compliance logs. An analytical standards officer will process your pro-forma invoice on WhatsApp.
                        </p>
                      </div>

                      {whatsappMsgUrl && (
                        <div className="pt-2">
                          <a
                            href={whatsappMsgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer"
                          >
                            <MessageSquare className="w-4 h-4" />
                            Open WhatsApp Manually
                          </a>
                          <span className="block text-[10px] text-slate-400 mt-2">
                            Click above if the chat did not open automatically.
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-slate-900 leading-tight">
                        Inquiry Compiled & Verified
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                        Thank you. Your reference standard list has been locked and compiled under security code <strong className="font-mono text-teal-700">UKP-{Math.floor(100000 + Math.random() * 900000)}</strong>.
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed max-w-sm mt-2">
                        An analytical standards officer will verify your institutional credentials (<strong>{form.email}</strong>) and provide a secure pro-forma invoice for <strong>{form.paymentMethod === "bank_transfer" ? "Bank Transfer" : "Gift Card"}</strong> payment with compliance logs in 24 business hours.
                      </p>
                    </div>
                  )}

                  <button
                    onClick={resetDrawerState}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-850 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow"
                  >
                    Return to Catalogue
                  </button>
                </div>
              ) : isCheckingOut ? (
                /* SECURE CHECKOUT FORM */
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-4 text-xs text-amber-900 leading-normal space-y-1.5">
                    <div className="font-bold flex items-center gap-1.5 text-amber-950 uppercase font-mono tracking-wide">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-amber-700" />
                      Strict UK Regulatory Mandate
                    </div>
                    <p>
                      UK regulations require buyer verification. To unlock dispatch, please confirm your academic, commercial, or clinical research context below.
                    </p>
                  </div>

                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-[10px] text-slate-400 font-mono uppercase">Principal Researcher Name *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Dr. Arthur Pendelton"
                      className={`w-full px-4 py-2.5 text-xs border rounded-xl focus:border-teal-700 focus:outline-none bg-white ${
                        errors.name ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] text-slate-400 font-mono uppercase">Institutional Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="e.g. a.pendelton@institution.ac.uk"
                      className={`w-full px-4 py-2.5 text-xs border rounded-xl focus:border-teal-700 focus:outline-none bg-white ${
                        errors.email ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                  </div>

                  {/* Registry Number */}
                  

                  {/* Phone Number Field */}
                  <div className="space-y-1">
                    <label className="block text-[10px] text-slate-400 font-mono uppercase">Contact Phone Number *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +44 7916 999 789"
                      className={`w-full px-4 py-2.5 text-xs border rounded-xl focus:border-teal-700 focus:outline-none bg-white ${
                        errors.phone ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Institution */}
                  <div className="space-y-1">
                    <label className="block text-[10px] text-slate-400 font-mono uppercase">Research Affiliation / Lab Name *</label>
                    <input
                      required
                      type="text"
                      name="institution"
                      value={form.institution}
                      onChange={handleInputChange}
                      placeholder="e.g. Oxford Molecular Biology Dept"
                      className={`w-full px-4 py-2.5 text-xs border rounded-xl focus:border-teal-700 focus:outline-none bg-white ${
                        errors.institution ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.institution && <p className="text-[10px] text-red-500">{errors.institution}</p>}
                  </div>

                  {/* Payment Methods Choice */}
                  <div className="space-y-2">
                    <label className="block text-[10px] text-slate-400 font-mono uppercase">Preferred Payment Option *</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, paymentMethod: "bank_transfer" }))}
                        className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-24 cursor-pointer ${
                          form.paymentMethod === "bank_transfer"
                            ? "border-teal-600 bg-teal-50/40 shadow-sm ring-1 ring-teal-600"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <span className="font-bold text-slate-900 text-xs block">Bank Transfer</span>
                        <span className="text-[10px] text-slate-500 leading-normal block mt-1">
                          Direct BACS/CHAPS institutional wire.
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, paymentMethod: "gift_card" }))}
                        className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-24 cursor-pointer ${
                          form.paymentMethod === "gift_card"
                            ? "border-teal-600 bg-teal-50/40 shadow-sm ring-1 ring-teal-600"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <span className="font-bold text-slate-900 text-xs block">Gift Card</span>
                        <span className="text-[10px] text-slate-500 leading-normal block mt-1">
                          Pre-funded corporate standard card.
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Research Purpose */}
                  

                  {/* Agreement checkbox */}
                  <div className="space-y-2">
                    <label className="flex items-start gap-2.5 select-none cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreement"
                        checked={form.agreement}
                        onChange={handleInputChange}
                        className="mt-0.5 h-4 w-4 text-teal-700 border-slate-300 rounded focus:ring-teal-500 cursor-pointer"
                      />
                      <span className="text-[10px] text-slate-600 leading-normal">
                        I verify that these reference standard compounds are destined strictly for in-vitro research and laboratory testing, in compliance with UK laws. I understand they are strictly not for human administration. *
                      </span>
                    </label>
                    {errors.agreement && <p className="text-[10px] text-red-500">{errors.agreement}</p>}
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setIsCheckingOut(false)}
                        className="flex-1 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                      >
                        Back to Cart
                      </button>
                    </div>
                    
                    <button
                      type="button"
                      disabled={isSubmitting || subtotal < 99}
                      onClick={() => triggerCheckout("whatsapp")}
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform duration-150 active:scale-[0.99]"
                    >
                      {isSubmitting && checkoutMethod === "whatsapp" ? (
                        <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <MessageSquare className="w-4 h-4" />
                      )}
                      Order & Verify via WhatsApp
                    </button>

                    <button
                      type="button"
                      disabled={isSubmitting || subtotal < 99}
                      onClick={() => triggerCheckout("email")}
                      className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform duration-150 active:scale-[0.99] border border-teal-800"
                    >
                      {isSubmitting && checkoutMethod === "email" ? (
                        <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Mail className="w-4 h-4" />
                      )}
                      Order & Verify via Email
                    </button>
                  </div>
                </form>
              ) : cart.length === 0 ? (
                /* EMPTY CART SCREEN */
                <div className="text-center py-20 space-y-4">
                  <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-300 mx-auto">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base">Your Cart is Empty</h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                      Explore our premium reference catalogue and add high-purity lyophilised peptide compounds to compile your list.
                    </p>
                  </div>
                  <button
                    onClick={resetDrawerState}
                    className="px-6 py-2.5 bg-teal-50 text-teal-800 border border-teal-100 hover:bg-teal-100 rounded-xl text-xs font-bold transition-all uppercase tracking-wider cursor-pointer"
                  >
                    Browse Compounds
                  </button>
                </div>
              ) : (
                /* CART ITEMS LIST */
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 hover:shadow-sm transition-shadow group relative"
                    >
                      {/* Thumbnail Image */}
                      <div className="w-16 h-16 bg-slate-50/80 rounded-xl border border-slate-100 p-2 flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Product details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 text-xs truncate leading-tight group-hover:text-teal-700 transition-colors">
                          {item.product.name}
                        </h4>
                        <span className="block text-[10px] text-slate-400 font-mono mt-0.5 uppercase">
                          {item.product.size} • {item.product.purity} Purity
                        </span>
                        <div className="flex items-center justify-between mt-2.5">
                          {/* Quantity control */}
                          <div className="flex items-center border border-slate-100 rounded-lg overflow-hidden bg-slate-50/50">
                            <button
                              type="button"
                              onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-mono text-[11px] font-bold text-slate-800 text-center min-w-[20px]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          {/* Unit total */}
                          <span className="font-display font-bold text-slate-900 text-sm">
                            £{(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="absolute top-2 right-2 p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                        title="Remove compound"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with Subtotal & Actions */}
            {!isSubmitted && cart.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50/80 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-slate-500 uppercase font-mono">Indicative Subtotal</span>
                    <span className="text-2xl font-display font-extrabold text-slate-900">
                      £{subtotal.toFixed(2)} <span className="text-xs text-slate-500 font-normal">GBP</span>
                    </span>
                  </div>

                  {subtotal < 99 && (
                    <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 flex items-start gap-2.5 text-amber-900 text-xs leading-normal">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block uppercase font-mono text-[9px] tracking-wider text-amber-950 mb-0.5">Minimum Order Required</span>
                        A minimum order value of <strong className="font-bold">£99.00</strong> (excluding shipping) is required to proceed. Please add <strong className="font-bold">£{(99 - subtotal).toFixed(2)}</strong> more of compounds to your cart.
                      </div>
                    </div>
                  )}

                  <p className="text-[10px] text-slate-400 leading-normal">
                    * Subtotal excludes specialized temperature-controlled tracked shipping. Tax computed at institutional verification.
                  </p>
                </div>

                {!isCheckingOut ? (
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    disabled={subtotal < 99}
                    className="w-full py-4 bg-teal-700 hover:bg-teal-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer group"
                  >
                    Proceed to Verification
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ) : null}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
