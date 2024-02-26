function extractor({special}) {
    const extractedAbilities = special.map(ability => {
      const {id, name, icon, description = 'Описание недоступно'} = ability;
      return {id, name, icon, description};
    });
    return extractedAbilities;
  }

export default extractor