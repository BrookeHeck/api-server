'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id) {
    try {
      return id ? this.model.findOne({ where: {id: id } }) : this.model.findAll(); 
    } catch(e) {console.log(e);}
  }

  async create(obj) {
    if(!obj) throw new Error('No json object provided to create method');
    try {
      return this.model.create(obj);
    } catch(e) {console.log(e);}
  }

  async update(id, obj) {
    if(!id || !obj) throw new Error('No id or object provided to update method');
    try {
      await this.model.update(obj, { where: {id: id } });
      return this.model.findOne({ where: { id: id } });
    } catch(e) {console.log(e);}
  }

  async delete(id) {
    if(!id) throw new Error('No id provided to delete method');
    try {
      await this.model.findOne({ where: { id: id } });
      return this.model.destroy({ where: { id: id } });
    } catch(e) {console.log(e);}
  }
}