/**
 * Real Contact Form Service
 * Primary: Express Node.js Backend API (http://localhost:5000/api/contact)
 * Secondary: Web3Forms API (fallback)
 */

export async function sendContactForm({ name, email, subject, message, botcheck }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  const accessKey = import.meta.env.VITE_CONTACT_ACCESS_KEY;

  // 1. Try Custom Express Node.js Backend Server API first
  try {
    const backendRes = await fetch(`${backendUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, email, subject, message, botcheck })
    });

    if (backendRes.ok) {
      const data = await backendRes.json();
      if (data.success) {
        return { success: true, message: data.message || 'Sent via Express Backend API' };
      }
    }
  } catch (backendErr) {
    console.log('[Contact Service] Backend offline or unavailable, attempting Web3Forms fallback...');
  }

  // 2. Fallback to Web3Forms API if access key is available
  if (accessKey && accessKey !== 'your_web3forms_access_key_here') {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: subject || `New Portfolio Contact from ${name}`,
          message,
          from_name: "Balivada Rama Charan Portfolio",
          botcheck: botcheck ? "true" : ""
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        return { success: true, result };
      }
    } catch (web3Err) {
      console.error('[Contact Service] Web3Forms API error:', web3Err);
    }
  }

  // 3. Client mailto launcher fallback
  const mailtoSubject = encodeURIComponent(subject || `New Portfolio Contact from ${name}`);
  const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:ramacharanbalivada2006@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  return {
    success: true,
    isMailtoFallback: true,
    message: "Mail client launched to dispatch message."
  };
}
