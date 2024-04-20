// src/models/networkRequest.js

class NetworkRequest {
    constructor(url, protocol, statusCode, mimeType, resourceType, transferSize) {
        this.url = url;
        this.protocol = protocol;
        this.statusCode = statusCode;
        this.mimeType = mimeType;
        this.resourceType = resourceType;
        this.transferSize = transferSize;
    }
}

module.exports = NetworkRequest;
