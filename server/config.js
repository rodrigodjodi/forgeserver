'use strict';

module.exports = {
    credentials: {
        client_id: "",
        client_secret: ""
    },
    scopeInternal: [
        'bucket:create',
        'bucket:read',
        'data:read',
        'data:create',
        'data:write'
    ],
    scopePublic: ['viewables:read']
};