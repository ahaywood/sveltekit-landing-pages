export const load = async () => {
  const allFaqFiles = import.meta.glob('$content/faqs/*.{svx,md}', { eager: true });

  const allFaqs = Object.entries(allFaqFiles).map(([path, module]) => {
    const faqPath = path.slice(16, -3); // remove the leading `../content/faqs/` and the trailing `.md`
    const { html } = module.default.render();
    return { ...module.metadata, answer: html, path: faqPath };
  });

  const faqs = allFaqs.sort((a, b) => a.order - b.order);

  if (!faqs.length) {
    return { status: 404 };
  }

  return { faqs };
}