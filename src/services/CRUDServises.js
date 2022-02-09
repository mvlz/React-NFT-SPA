import http from "./HttpService";
export function getAllData() {
    return http.get('?order_direction=desc')
}