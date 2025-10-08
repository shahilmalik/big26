import React, { useState } from "react";
import { TextInput } from "react-native";
type searchFieldType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function SearchField({ search, setSearch }: searchFieldType) {
  return (
    <TextInput
      style={{
        color: "white",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5,
      }}
      value={search}
      onChangeText={setSearch}
      placeholder="Search..."
      placeholderTextColor={"grey"}
    />
  );
}

export default SearchField;
