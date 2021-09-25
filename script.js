function edit() {
    document.getElementById('name').removeAttribute('readonly');
    document.getElementById('regno').removeAttribute('readonly');
    document.getElementById('desc').removeAttribute('readonly');
    document.getElementById('areaofinterest').removeAttribute('readonly');
  }
  function save() {
    document.getElementById('name').readOnly = true;
    document.getElementById('regno').readOnly = true;
    document.getElementById('desc').readOnly = true;
    document.getElementById('areaofinterest').readOnly = true;

  }