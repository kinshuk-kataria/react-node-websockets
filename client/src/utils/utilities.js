export const isUserEvent = message => {
  const evt = JSON.parse(message);
  return evt.type === 'userevent';
};

export const isDocumentEvent = message => {
  let evt = JSON.parse(message);
  return evt.type === 'contentchange';
};
