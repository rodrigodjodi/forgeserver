'use strict';

module.exports = {
    credentials: {
        client_id: process.env.FORGE_CLIENT_ID,
        client_secret: process.env.FORGE_CLIENT_SECRET
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