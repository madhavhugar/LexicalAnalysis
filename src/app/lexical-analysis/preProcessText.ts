export function preProcessTextToWords(text: string): string[] {
  return text
      .trim()
      .toLowerCase()
      .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
      .split(/[\s]+/)
      .filter(word => word !== '');
}

export function preProcessTextToSentences(text: string): string[] {
  return text
      .trim()
      .toLowerCase()
      .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
      .split('.')
      .filter(sentence => !sentence.match(/^[\s]+$/))
      .filter(sentence => sentence !== '');
}
