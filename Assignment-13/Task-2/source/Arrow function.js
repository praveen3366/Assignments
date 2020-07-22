let pp = {
    "Actors": [    {
        "name": "Tom Cruise",
        "age": 56,
        "Born At": "Syracuse, NY",
        "Birthdate": "July 3, 1962",
        "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
        "wife": null,
        "weight": 67.5,
        "hasChildren": true,
        "hasGreyHair": false,
        "children": [
          "Suri",
          "Isabella Jane",
          "Connor"
        ]    },
      {
        "name": "Robert Downey Jr.",
        "age": 53,
        "Born At": "New York City, NY",
        "Birthdate": "April 4, 1965",
        "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
        "wife": "Susan Downey",
        "weight": 77.1,
        "hasChildren": true,
        "hasGreyHair": false,
        "children": [
          "Indio Falconer",
          "Avri Roel",
          "Exton Elias"
        ]    }  ]
  };
  let childrens = (pp) => {
  let tomChildren = pp["Actors"][0]["children"];
  let robertChildren = pp["Actors"][1]["children"];
  let mergeChildren = tomChildren.concat(robertChildren);
  return mergeChildren;
  }
  console.log(childrens(pp))
