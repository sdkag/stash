export const titleize = (str) =>
  str[0].toUpperCase() + str.substring(1).toLowerCase();

export function mapIdsToComponents({ entityIds, sectionName }) {
  return entityIds ? (
    <div className={`${sectionName.toLowerCase()}-section`}>
      <title>{titleize(sectionName)}</title>
      {entityIds.map((entityId) => {
        return <Note key={entityId} entityId={entityId} />;
      })}
    </div>
  ) : null;
}
