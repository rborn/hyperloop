globals.assert(module.filename==='bar/cat/index.js',"module.filename should be 'bar/cat/index.js'",module.filename);
globals.assert(module.parent.id==='app',"module.parent.id should be 'app'",module.parent.id);
globals.assert(module.parent.loaded===false,"module.parent.loaded should be false",module.parent.loaded);


var Lion = module.require('./lion');

var lion = new Lion();
globals.assert(lion.sound()==='roar!',"lion.sound() should be 'roar!'",lion.sound());

