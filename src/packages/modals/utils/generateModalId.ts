const generateModalId = () =>
  `modal_${Math.random().toString(36).substr(2, 9)}`;

export { generateModalId };
