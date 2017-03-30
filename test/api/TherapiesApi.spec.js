/**
 * dic-client
 * Move your app forward with the diabetesincontrol API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DicClient);
  }
}(this, function(expect, DicClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DicClient.TherapiesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TherapiesApi', function() {
    describe('diabetesTherapiesBloodGlucoseControlGet', function() {
      it('should call diabetesTherapiesBloodGlucoseControlGet successfully', function(done) {
        //uncomment below and update the code to test diabetesTherapiesBloodGlucoseControlGet
        //instance.diabetesTherapiesBloodGlucoseControlGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diabetesTherapiesDietNutritionGet', function() {
      it('should call diabetesTherapiesDietNutritionGet successfully', function(done) {
        //uncomment below and update the code to test diabetesTherapiesDietNutritionGet
        //instance.diabetesTherapiesDietNutritionGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diabetesTherapiesGet', function() {
      it('should call diabetesTherapiesGet successfully', function(done) {
        //uncomment below and update the code to test diabetesTherapiesGet
        //instance.diabetesTherapiesGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diabetesTherapiesGlp1Get', function() {
      it('should call diabetesTherapiesGlp1Get successfully', function(done) {
        //uncomment below and update the code to test diabetesTherapiesGlp1Get
        //instance.diabetesTherapiesGlp1Get(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diabetesTherapiesInsulinGet', function() {
      it('should call diabetesTherapiesInsulinGet successfully', function(done) {
        //uncomment below and update the code to test diabetesTherapiesInsulinGet
        //instance.diabetesTherapiesInsulinGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diabetesTherapiesMetforminGet', function() {
      it('should call diabetesTherapiesMetforminGet successfully', function(done) {
        //uncomment below and update the code to test diabetesTherapiesMetforminGet
        //instance.diabetesTherapiesMetforminGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diabetesTherapiesSglt2Get', function() {
      it('should call diabetesTherapiesSglt2Get successfully', function(done) {
        //uncomment below and update the code to test diabetesTherapiesSglt2Get
        //instance.diabetesTherapiesSglt2Get(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('diabetesTherapiesSulfonylureaGet', function() {
      it('should call diabetesTherapiesSulfonylureaGet successfully', function(done) {
        //uncomment below and update the code to test diabetesTherapiesSulfonylureaGet
        //instance.diabetesTherapiesSulfonylureaGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
