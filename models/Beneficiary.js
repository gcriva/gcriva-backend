'use strict';

const gstore = require('gstore-node');

const beneficiarySchema = new gstore.Schema({
  name: { type: 'string', required: true },
  childName: 'string',
  childNumber: 'string',
  birthDate: { type: 'datetime', required: true },
  grade: 'string',
  street: 'string',
  city: 'string',
  state: 'string',
  motherName: 'string',
  fatherName: 'string',
  guardianName: 'string',
  createdAt: { type: 'datetime', default: gstore.defaultValues.NOW, write: false },
  updatedAt: { type: 'datetime' }
});

beneficiarySchema.pre('save', function preSave() {
  const user = this;

  user.updatedAt = new Date();
  return Promise.resolve();
});

const Beneficiary = gstore.model('Beneficiary', beneficiarySchema);

module.exports = Beneficiary;