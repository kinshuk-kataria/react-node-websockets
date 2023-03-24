export const isUserEvent = message => {
  const evt = JSON.parse(message.data);
  return evt.type === 'userevent';
};

export const isDocumentEvent = message => {
  let evt = JSON.parse(message.data);
  return evt.type === 'contentchange';
};
