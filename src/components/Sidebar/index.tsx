import { SidebarContainer } from "./styles";
import { ChooseLanguages } from "./components/ChooseLanguages";

export function Sidebar() {
  return (
    <SidebarContainer>
      <h4>Settings</h4>
      <h4>Languages</h4>
      <ChooseLanguages />
    </SidebarContainer>
  );
}
