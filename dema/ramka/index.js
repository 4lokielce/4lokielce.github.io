/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById('pano'));

// Create source.
var source = Marzipano.ImageUrlSource.fromString(
  "//4lokielce.github.io/dema/ramka/wosp2022/{z}/{f}/{y}/{x}.jpg",
  { cubeMapPreviewUrl: "//4lokielce.github.io/dema/ramka/wosp2022/preview.jpg" });

// Create geometry.
var geometry = new Marzipano.CubeGeometry([
  { tileSize: 256, size: 256, fallbackOnly: true },
  { tileSize: 512, size: 512 },
  { tileSize: 512, size: 1024 },
  { tileSize: 512, size: 2048 },
  { tileSize: 512, size: 4096 }
]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(4096, 100*Math.PI/180);
var view = new Marzipano.RectilinearView(null, limiter);

// Create scene.
var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view,
  pinFirstLevel: true
});

// Display scene.
scene.switchTo();

// Get the hotspot container for scene.
var container = scene.hotspotContainer();

// Create hotspot with different sources.
container.createHotspot(document.getElementById('iframespot'), { yaw: 0.0335, pitch: -0.102 },
  { perspective: { radius: 1640, extraTransforms: "rotateX(5deg)" }});
container.createHotspot(document.getElementById('iframeselect'), { yaw: -11.55, pitch: -0.239 });

// HTML sources.
var hotspotHtml = {
  youtube: '<iframe id="youtube" width="1280" height="480" src="https://www.youtube.com/embed/a4YjKmsXyds?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>',
  youtubeWithControls: '<iframe id="youtubeWithControls" width="1280" height="480" src="https://www.youtube.com/embed/a4YjKmsXyds?rel=0&amp;controls=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
  googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.3596684497369!2d20.63850022936096!3d50.8775192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827be2a813b97%3A0x2aa970b22d866bd8!2sIV%20LO%20-%20szko%C5%82a%20dla%20dzieci!5e1!3m2!1spl!2spl!4v1647339574293!5m2!1spl!2spl" width="1280" height="480" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  www: '<iframe id="www" src="https://4lokielce.github.io/" type="text/html" width="1280" height="480" frameborder="0" scrolling="no" allowfullscreen="true"> </iframe>'
};

// Switch sources when clicked.
function switchHotspot(id) {
  var wrapper = document.getElementById('iframespot');
  wrapper.innerHTML = hotspotHtml[id];
}

var switchElements = document.querySelectorAll('[data-source]');
for (var i = 0; i < switchElements.length; i++) {
  var element = switchElements[i];
  addClickEvent(element);
}

function addClickEvent(element) {
  element.addEventListener('click', function() {
    switchHotspot(element.getAttribute('data-source'));
  });
}
