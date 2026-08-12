export function toDatetimeLocalValue(date) {
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

    return local.toISOString().slice(0, 16);
}
export function formatDateTime(value, timeZone) {
    return value ? new Date(value).toLocaleString(undefined, { timeZone }) : '—';
}
