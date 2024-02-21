const FamilyInfoContainerCreator = {
  Create() {
    const familyInfoContainer = document.createElement("div");
    familyInfoContainer.className = "family-info-container";

    const formFieldFlexFamilyNameContainerElement =
      document.createElement("div");
    formFieldFlexFamilyNameContainerElement.className =
      "form-field-container";
    const familyNameLabel = document.createElement("label");
    familyNameLabel.textContent = "Family name:";
    familyNameLabel.htmlFor = "family-name";
    const familyNameInput = document.createElement("input");
    familyNameInput.type = "text";
    familyNameInput.name = "family-name";
    familyNameInput.id = "family-name";
    familyNameInput.required = true;
    formFieldFlexFamilyNameContainerElement.appendChild(familyNameLabel);
    formFieldFlexFamilyNameContainerElement.appendChild(familyNameInput);

    const formFieldFlexEmailContainerElement = document.createElement("div");
    formFieldFlexEmailContainerElement.className =
      "form-field-container";
    const EmailLabel = document.createElement("label");
    EmailLabel.textContent = "Email:";
    EmailLabel.htmlFor = "email";
    const EmailInput = document.createElement("input");
    EmailInput.type = "email";
    EmailInput.name = "email";
    EmailInput.id = "email";
    EmailInput.required = true;
    formFieldFlexEmailContainerElement.appendChild(EmailLabel);
    formFieldFlexEmailContainerElement.appendChild(EmailInput);

    const formFieldFlexNumPeopleContainerElement =
      document.createElement("div");
    formFieldFlexNumPeopleContainerElement.id = "num-people-container";
    formFieldFlexNumPeopleContainerElement.className =
      "form-field-container";
    const NumPeopleLabel = document.createElement("label");
    NumPeopleLabel.textContent = "Number of people:";
    NumPeopleLabel.htmlFor = "num-people-input";
    const NumPeopleInput = document.createElement("input");
    NumPeopleInput.type = "num-people";
    NumPeopleInput.name = "number-of-people";
    NumPeopleInput.id = "num-people-input";
    NumPeopleInput.required = true;
    formFieldFlexNumPeopleContainerElement.appendChild(NumPeopleLabel);
    formFieldFlexNumPeopleContainerElement.appendChild(NumPeopleInput);

    const stayInChaletContainer = document.createElement("div");
    stayInChaletContainer.id = "stay-in-chalet-container";
    const stayInChaletCheckboxLabel = document.createElement("label");
    stayInChaletCheckboxLabel.textContent = "We will stay in a chalet:";
    const stayInChaletCheckbox = document.createElement("input");
    stayInChaletCheckbox.type = "checkbox";
    stayInChaletCheckbox.id = "stay-in-chalet-checkbox";
    stayInChaletContainer.appendChild(stayInChaletCheckboxLabel);
    stayInChaletContainer.appendChild(stayInChaletCheckbox);

    const stayInRvContainer = document.createElement("div");
    stayInRvContainer.id = "stay-in-rv-container";
    const stayInRvCheckboxLabel = document.createElement("label");
    stayInRvCheckboxLabel.textContent = "We will stay in an RV:";
    const stayInRvCheckbox = document.createElement("input");
    stayInRvCheckbox.type = "checkbox";
    stayInRvCheckbox.id = "stay-in-rv-checkbox";
    stayInRvContainer.appendChild(stayInRvCheckboxLabel);
    stayInRvContainer.appendChild(stayInRvCheckbox);

    const stayInTentContainer = document.createElement("div");
    stayInTentContainer.id = "stay-in-tent-container";
    const stayInTentCheckboxLabel = document.createElement("label");
    stayInTentCheckboxLabel.textContent = "We will stay in tent(s):";
    const stayInTentCheckbox = document.createElement("input");
    stayInTentCheckbox.type = "checkbox";
    stayInTentCheckbox.id = "stay-in-tent-checkbox";
    stayInTentContainer.appendChild(stayInTentCheckboxLabel);
    stayInTentContainer.appendChild(stayInTentCheckbox);

    const sleepOnGroundContainer = document.createElement("div");
    sleepOnGroundContainer.id = "sleep-on-ground-container";
    const sleepOnGroundCheckboxLabel = document.createElement("label");
    sleepOnGroundCheckboxLabel.textContent = "We will sleep on the ground:";
    const sleepOnGroundCheckbox = document.createElement("input");
    sleepOnGroundCheckbox.type = "checkbox";
    sleepOnGroundCheckbox.id = "sleep-on-ground-checkbox";
    sleepOnGroundContainer.appendChild(sleepOnGroundCheckboxLabel);
    sleepOnGroundContainer.appendChild(sleepOnGroundCheckbox);

    const stayOvernightContainer = document.createElement("div");
    stayOvernightContainer.id = "stay-overnight-container";
    const stayOvernightCheckboxLabel = document.createElement("label");
    stayOvernightCheckboxLabel.textContent = "We will stay overnight:";
    const stayOvernightCheckbox = document.createElement("input");
    stayOvernightCheckbox.type = "checkbox";
    stayOvernightCheckbox.id = "stay-overnight-checkbox";
    stayOvernightContainer.appendChild(stayOvernightCheckboxLabel);
    stayOvernightContainer.appendChild(stayOvernightCheckbox);

    familyInfoContainer.appendChild(formFieldFlexFamilyNameContainerElement);
    familyInfoContainer.appendChild(formFieldFlexEmailContainerElement);
    familyInfoContainer.appendChild(formFieldFlexNumPeopleContainerElement);
    familyInfoContainer.appendChild(stayInChaletContainer);
    familyInfoContainer.appendChild(stayInRvContainer);
    familyInfoContainer.appendChild(stayInTentContainer);
    familyInfoContainer.appendChild(sleepOnGroundContainer);
    familyInfoContainer.appendChild(stayOvernightContainer);

    return familyInfoContainer;
  },
};

export default FamilyInfoContainerCreator;
