export interface EmbeddedService {
    _embedded: ServiceRequest;
}

export interface ServiceRequest {
    services: HardwareService[];
}

export interface Embedded {
    _embedded: HardwareRequest;
}

export interface HardwareRequest {
    hardwares: Hardware[];
}

export interface Hardware {
    id: string;
    name: string;
    serial: string;
    hardwareStatus: HardwareStatus;
    hardwareService: HardwareService;
}

export interface HardwareStatus {
    id: string;
    name: string
}

export interface HardwareService {
    id: string;
    name: string;
    serviceStatus: ServiceStatus
}

export interface ServiceStatus {
    id: string;
    name: string
}

export const enum HardwareStatusId {
    NORMAL = 1,
    FAIL,
    UNDER_MAINTENANCE,
    TO_REPLACE
}

export const enum HardwareServiceStatusId {
    NORMAL = 1,
    FAIL
}





