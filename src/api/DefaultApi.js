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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Feed', 'model/SearchFeed'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Feed'), require('../model/SearchFeed'));
  } else {
    // Browser globals (root is window)
    if (!root.DicClient) {
      root.DicClient = {};
    }
    root.DicClient.DefaultApi = factory(root.DicClient.ApiClient, root.DicClient.Error, root.DicClient.Feed, root.DicClient.SearchFeed);
  }
}(this, function(ApiClient, Error, Feed, SearchFeed) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Categories
     * Categories
     * @param {String} category 
     * @param {String} subcategories 
     * @param {Number} json 1 menu
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Feed}
     */
    this.categorySubcategoriesGet = function(category, subcategories, json) {
      var postBody = null;

      // verify the required parameter 'category' is set
      if (category == undefined || category == null) {
        throw "Missing the required parameter 'category' when calling categorySubcategoriesGet";
      }

      // verify the required parameter 'subcategories' is set
      if (subcategories == undefined || subcategories == null) {
        throw "Missing the required parameter 'subcategories' when calling categorySubcategoriesGet";
      }

      // verify the required parameter 'json' is set
      if (json == undefined || json == null) {
        throw "Missing the required parameter 'json' when calling categorySubcategoriesGet";
      }


      var pathParams = {
        'category': category,
        'subcategories': subcategories
      };
      var queryParams = {
        'json': json
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Feed;

      return this.apiClient.callApi(
        '/{category}/{subcategories}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Pagination Categories
     * Pagination Categories
     * @param {String} category 
     * @param {String} subcategories 
     * @param {String} page 
     * @param {Number} json 1 menu
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Feed}
     */
    this.categorySubcategoriesPagePageGet = function(category, subcategories, page, json) {
      var postBody = null;

      // verify the required parameter 'category' is set
      if (category == undefined || category == null) {
        throw "Missing the required parameter 'category' when calling categorySubcategoriesPagePageGet";
      }

      // verify the required parameter 'subcategories' is set
      if (subcategories == undefined || subcategories == null) {
        throw "Missing the required parameter 'subcategories' when calling categorySubcategoriesPagePageGet";
      }

      // verify the required parameter 'page' is set
      if (page == undefined || page == null) {
        throw "Missing the required parameter 'page' when calling categorySubcategoriesPagePageGet";
      }

      // verify the required parameter 'json' is set
      if (json == undefined || json == null) {
        throw "Missing the required parameter 'json' when calling categorySubcategoriesPagePageGet";
      }


      var pathParams = {
        'category': category,
        'subcategories': subcategories,
        'page': page
      };
      var queryParams = {
        'json': json
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Feed;

      return this.apiClient.callApi(
        '/{category}/{subcategories}/page/{page}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Free search
     * free search posts list
     * @param {String} pageNum Pagination Free search query.
     * @param {String} s Free search query.
     * @param {Number} json Scope under which the request is made; determines fields present in response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchFeed}
     */
    this.pagePageNumGet = function(pageNum, s, json) {
      var postBody = null;

      // verify the required parameter 'pageNum' is set
      if (pageNum == undefined || pageNum == null) {
        throw "Missing the required parameter 'pageNum' when calling pagePageNumGet";
      }

      // verify the required parameter 's' is set
      if (s == undefined || s == null) {
        throw "Missing the required parameter 's' when calling pagePageNumGet";
      }

      // verify the required parameter 'json' is set
      if (json == undefined || json == null) {
        throw "Missing the required parameter 'json' when calling pagePageNumGet";
      }


      var pathParams = {
        'pageNum': pageNum
      };
      var queryParams = {
        's': s,
        'json': json
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SearchFeed;

      return this.apiClient.callApi(
        '/page/{pageNum}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Free search
     * free search posts list
     * @param {String} s Free search query.
     * @param {Number} json Scope under which the request is made; determines fields present in response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchFeed}
     */
    this.rootGet = function(s, json) {
      var postBody = null;

      // verify the required parameter 's' is set
      if (s == undefined || s == null) {
        throw "Missing the required parameter 's' when calling rootGet";
      }

      // verify the required parameter 'json' is set
      if (json == undefined || json == null) {
        throw "Missing the required parameter 'json' when calling rootGet";
      }


      var pathParams = {
      };
      var queryParams = {
        's': s,
        'json': json
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SearchFeed;

      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
