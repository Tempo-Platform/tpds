'use strict';

var tokens_index = require('../../tokens/index.js');

var spacings = tokens_index.spacing;
var index = {
  xxs: spacings.xxs,
  xs: spacings.xs,
  sm: spacings.sm,
  md: spacings.md,
  lg: spacings.lg,
  xl: spacings.xl,
  xxl: spacings.xxl,
  xxxl: spacings.xxxl
};

module.exports = index;
