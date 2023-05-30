"use strict";

var bgCanvas = document.getElementById('grillCanvas');
paternizer({
  stripes: [{
    color: '#3a82d6',
    rotation: 0,
    opacity: 50,
    mode: 'plaid',
    width: 1,
    gap: 30,
    offset: 1
  }],
  bg: '#ffffff'
});