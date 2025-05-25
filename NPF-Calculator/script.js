'use strict';

$(function () {

  function calculate() {
    let sensor_width = parseFloat($('#sensor_width').val());
    let sensor_height = parseFloat($('#sensor_height').val());
    let image_width = parseFloat($('#image_width').val());
    let image_height = parseFloat($('#image_height').val());
    let aperture = parseFloat($('#aperture').val());
    let focal_length = parseFloat($('#focal_length').val());

    let pixel_pitch_width = sensor_width / image_width * 1000.0;
    let pixel_pitch_height = sensor_height / image_height * 1000.0;
    let pixel_pitch = Math.min(pixel_pitch_width, pixel_pitch_height);

    let shutter_speed = ((35.0 * aperture) + (30.0 * pixel_pitch)) / focal_length;
    $('#shutter_speed').text(Math.floor(shutter_speed) + 's');
  }

  calculate();

  $('input').on('input', function () {
    calculate();
  });

});
