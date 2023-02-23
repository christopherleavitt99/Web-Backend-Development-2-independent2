module.exports = (mongoose) => {
    const listItem = mongoose.model(
      'listItem',
      mongoose.Schema({
        listItem: {
          type: String
        }
        }
      )
    );
  
    return listItem;
  };