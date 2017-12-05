/// <reference path="angular.d.ts" />

var app = angular.module("myapp", []);

app.controller('DataController', function($http) {
	var self = this;
	self.data = [
	{ name: 'Music', types: 
		[
			{ name: 'Pop', items: 
				[{ name: 'Thinking Out Loud' }, { name: 'Bad Blood' }, { name: 'Flashlight' }]},
		 	{ name: 'Rock', items:
		 		[{ name: 'Hotel California' }, { name: 'Dream On' }, { name: 'We Are The Champions' }]},
		 	{ name: 'Soul', items:
			 	[{ name: 'Lay Me Down' },{ name: 'Listen' }, { name: 'Rolling In The Deep' }]}
		]},
	{ name: 'Movie', types:
		[
			{ name: 'Action', items:
				[{ name: 'Fast & Furious' }, { name: 'Hunger Game' }, { name: 'The Avengers' }]},
			{ name: 'Comedy', items:
				[{ name: 'Ted' }, { name: 'The Hangover' }, { name: 'The Dictator' }]},
			{ name: 'Thriller', items:
				[{ name: 'Unfriended' }, { name: 'Contracted'}, { name: 'Anna Belle' }]}
		]}
	];
	self.types = [];
	self.items = [];
	self.sort = null;
	self.type = null;
	self.item = null;
	self.change = function(select, option) {
		if (option === 'sort') {
			self.types = [];
			self.items = [];
			if (select != null) {
				self.types = select.types;
			}
		}
		if (option === 'type') {
			self.items = [];
			if (select != null) {
				self.items = select.items;
			}
		}
	};
	self.clear = function() {
		self.types=[];
		self.items=[];
		self.sort = null;
		self.type = null;
		self.item = null;
	}
})