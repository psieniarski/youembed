'use strict';

var config = {
	baseURL: 'https://www.youtube.com/embed/'
}; 

var YouEmbed = function(id) {	
	if (!(this instanceof YouEmbed)){
        return new YouEmbed(id);
  } 

  this.id = id;
}

YouEmbed.prototype.get = function() {
	return config.baseURL + this.id;
};

module.exports = YouEmbed; 


