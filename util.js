function csvToJson(csv) {
  const header = [];
  const data = csv_parse_sync.parse(csv, {
    columns: function (columns) {
      header.push(...columns);
      return columns;
    },
    skip_empty_lines: true
  });
  return {
    header,
    data
  };
}

function getCSV(url) {
  return new Promise(function (res) {
    $.get(url, function (data, status) {
      res(csvToJson(data));
    });
  });
}

function listToTable(id, list, headers) {
  const table = document.getElementById(id);
  const newDiv = document.createElement('div');
  newDiv.className = 'autoOverflowXTable';
  table.parentNode.insertBefore(newDiv, table);
  newDiv.appendChild(table);
  const thead = `<thead>${headers.map(header => `<th>${header}</th>`).join('')}</thead>`;
  const tbody = `<tbody>${list.map(row => `<tr>${headers.map(header => `<td>${row[header]}</td>`).join('')}</tr>`).join('')}</tbody>`;
  table.innerHTML = thead + tbody;
  Sortable.initTable(table);
}
