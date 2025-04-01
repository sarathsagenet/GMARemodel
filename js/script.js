function showImage(type) {
    const imageMap = {
      old: 'images/OldArchitecture_PNG.png',
      current: 'images/current.png',
      new: 'images/new.png'
    };
    document.getElementById('archImage').src = imageMap[type];
  }
  