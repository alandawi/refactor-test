import { getResponse } from './api';

export const transform = callback => {
    getResponse('./from.json', data => {
      console.log(data);

      var schema = {};
      schema.data = {};
  
      for (var propName in data) {
        schema.data[propName] = data[propName];
  
        if (propName === 'properties') {
          schema.data[propName] = [];
  
          for (var subPropName in data[propName]) {
            var subSchema = {};
  
            subSchema.name = subPropName;
  
            for (var subSubPropName in data[propName][subPropName]) {
              subSchema[subSubPropName] = data[propName][subPropName][subSubPropName];
  
              if (subSubPropName === 'properties') {
                subSchema[subSubPropName] = [];
  
                for (var subSubSubPropName in data[propName][subPropName][subSubPropName]) {
                  var obj = {};
  
                  subSchema.name = subSubSubPropName;
  
                  for (var subSubSubSubPropName in data[propName][subPropName][subSubPropName][subSubSubPropName]) {
                    obj[subSubSubSubPropName] = data[propName][subPropName][subSubPropName][subSubSubPropName][subSubSubSubPropName];
                  }
  
                  subSchema[subSubPropName].push(obj);
                }
              }
            }
  
            schema.data[propName].push(subSchema);
          }
        }
      }
  
      callback(schema);
    });
  }