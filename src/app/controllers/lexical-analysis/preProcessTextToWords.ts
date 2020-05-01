export default function preProcessTextToWords(text: string): string[] {
  return text
      .trim()
      .toLowerCase()
      .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
      .split(/[\s]+/)
      .filter(word => word !== '');
}
