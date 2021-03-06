'use strict';

const { default: createStrapi } = require('strapi');
const {sanitizeEntity} = require('strapi-utils')
const finder = require('strapi-utils/lib/finder')
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async find(ctx){

        const {user} = ctx.state //this is the magic user

        let entities
        if(ctx.query._q){
            entities = await strapi.services.pedidos.search({...ctx.query, user: user.id})
        } else{
            entities = await strapi.services.pedidos.find({...ctx.query, user: user.id})
        }

        return entities.map(entity => sanitizeEntity(entity, {model: strapi.models.pedidos}))

    },

    async findOne(ctx){
        const {id} = ctx.params
        const {user} = ctx.state

        const entity = await strapi.services.pedidos.findOne({id, user: user.id})
        return sanitizeEntity(entity, {model: strapi.models.pedidos})
    }

};
