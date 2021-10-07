export const titleize = (str) => {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
};
export function mapIdsToComponents(entityIds, Component, sectionName) {
  return entityIds ? (
    <div className={sectionName ? `${sectionName.toLowerCase()}-section` : ""}>
      {Boolean(sectionName) && <title>{titleize(sectionName)}</title>}
      {entityIds.map((entityId) => {
        return <Component key={entityId} entityId={entityId} />;
      })}
    </div>
  ) : null;
}

export const debounce = (thunk, timeOut, dispatch) => {
  //TODO: incorporate this properly
  let timer;
  // ;
  // return (...args) => {
  clearTimeout(timer);
  // ;
  timer = setTimeout((args) => {
    dispatch(thunk(...args));
  }, timeOut);
};
