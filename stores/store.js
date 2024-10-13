import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
   state: () => ({
      mobileDrawerStatus: false,
      showPreloader: true,
      searchPopupStatus: false,
      sideBarDrawerStatus: false,
      activeSection: null,
   }),
   actions: {
      // Mobile Drawer
      changeMobileDrawerStatus() {
         this.mobileDrawerStatus = !this.mobileDrawerStatus;
      },

      // Preloader
      hidePreloader() {
         this.showPreloader = false;
      },
      showPreloader() {
         this.showPreloader = true;
      },

      // Search Popup
      changeSearchPopupStatus() {
         this.searchPopupStatus = !this.searchPopupStatus;
      },

      // Mobile Drawer
      changeSideBarDrawerStatus() {
         this.sideBarDrawerStatus = !this.sideBarDrawerStatus;
      },
      scrollToSection(sectionId) {
         this.activeSection = sectionId;
         const element = document.getElementById(sectionId);
         if (element) {
            element.scrollIntoView({ behavior: "smooth" });
         }
      },
      setActiveSection(sectionId) {
         this.activeSection = sectionId;
      },
   },
});
