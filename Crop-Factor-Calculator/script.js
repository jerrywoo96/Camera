'use strict';

$(function () {

  function calculate() {
    const selectedCropFactor = parseFloat($('tbody tr.selected input.crop-factor').val());
    const selectedFocalLength = parseFloat($('tbody tr.selected input.focal-length').val());
    const selectedResolution = parseFloat($('tbody tr.selected input.resolution').val());
    const selectedWidth = parseFloat($('tbody tr.selected input.crop-factor').data('width'));
    const selectedHeight = parseFloat($('tbody tr.selected input.crop-factor').data('height'));

    $('tbody tr:not(.selected)').each(function () {
      const cropFactor = parseFloat($(this).find('input.crop-factor').val());
      const focalLength = (selectedFocalLength * selectedCropFactor) / cropFactor;
      $(this).find('input.focal-length').val(focalLength.toFixed(0));

      const width = parseFloat($(this).find('input.crop-factor').data('width'));
      const height = parseFloat($(this).find('input.crop-factor').data('height'));
      const resolution = selectedResolution / ((selectedWidth / width) * (selectedHeight / height));
      $(this).find('input.resolution').val(resolution.toFixed(1));
    });
  }

  calculate();

  $('input').on('input', function () {
    $('tbody tr').removeClass('selected');
    $(this).closest('tr').addClass('selected');
    calculate();
  });

});
