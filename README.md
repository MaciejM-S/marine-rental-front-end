# Marine-Rental Front-End
This repository contains the client-side application for Marine-Rental, a FullStack boats renting platform. The application is deployed at:

# https://your-exp.onrender.com
The front-end of the application has been developed using React with Redux and MUI. 

This app was created for individuals interested in renting a boat or renting out their own. Boat owners can easily create an account, providing all the necessary details about their vessel, including photos, features, and pricing. For individuals seeking to rent a boat, search engine provides a simple and efficient way to search and filter through a variety of available options in different locations.
The application has been deployed on Render as a static website, providing a seamless and efficient user experience.

This FullStack networking web application allows users to:

+ User Registration: Users can easily create an account as boat owners or renters, providing their personal information and contact details.

+ Boat Listing: Boat owners can create listings for their vessels, including information such as boat type, size, capacity, amenities, photos, and pricing. This allows potential renters to get a comprehensive overview of the available boats.

+ Search and Filter: The web app offers a search engine that enables users to find boats based on their preferences and location. Renters can filter the search results by boat type, size, location, and other relevant criteria.

+ Location-based Search: The app allows users to search for boats in different locations, making it convenient for individuals who want to rent a boat in a specific area.

+ Seamless User Experience: The app has been deployed on Render as a static website, ensuring a seamless and efficient user experience. Render is known for its fast performance and reliability, enhancing the overall usability of the web app.

+ Photos and Visuals: Boat owners can upload high-quality photos of their vessels, allowing renters to get a visual representation of the boat's condition, amenities, and overall appeal.

+ Users can add vessels to their "Favorites" section by clicking a "Like" button on the boat listing. This allows users to easily save and manage their preferred boats for future reference within the app.


## Test Account Information
To explore the functionalities of the application, you can use the following dummy account:

### Login: dummy@dummy.pl - copy and paste this email to sign in window in the app
### Password: 123456! - copy and paste this pasword to sign in window in the app

Feel free to log in with these credentials and navigate through the application to get a better understanding of its features.


### To provide better understanding of <b>/src</b> directory I present detail description:

- ## `app`: [Directory] Contains the app files:
    - `components`: [Directory] Contains the components that are used in containers directory.
    The directory structure is as follows:
       - ## Common
       - ## HomePage
       - ## Vessels
       - ## YourAccount
          
## Common
- `DateRange`: A component for selecting a range of dates.
- `Footer`: A footer component with styling.
- `MiniVessel`: A component that is use to render tail of vessel for YourAccount or Vessels page.
- `Navbar`: A navigation bar component with logo, tabs, and user avatar(if logged).
- `Vessel`: A component for displaying vessel information, pictures and owner information.

### /dateRange
- `dateRangeStyle.ts`: Stylesheet for the `DateRange` component.
- `DesktopDatePicker.tsx`: A date picker component for desktop devices.
- `FindVesBtn.tsx`: A button component for finding vessels.
- `MobileDatePicker.tsx`: A date picker component for mobile devices.

### /footer
- `footerStyle.ts`: Stylesheet for the `Footer` component.
- `index.tsx`: The main file for the `Footer` component.

### /miniVessel
- `favoritePanel.tsx`: A panel component for managing favorite status liked/not-liked.
- `managePanel.tsx`: A panel component for managing vessels used only in YourAccount page to remove/edit vessel .
- `miniVessel.tsx`: The main file for the `MiniVessel` component.
- `miniVesselStyle.ts`: Stylesheet for the `MiniVessel` component.
- `removeDialog.tsx`: A dialog component for approving removing a vessel.
- `unlikeDialog.tsx`: A dialog component for approving unliking a vessel.

### /navbar
- `index.tsx`: The main file for the `Navbar` component.
- `mainLogo.tsx`: A logo component for the `Navbar`.
- `mobileBar.tsx`: A mobile device navigation bar component.
- `mobileLogo.tsx`: A logo component for the mobile device navigation bar.
- `navbarStyle.ts`: Styles for the `Navbar` component.
- `navItems.tsx`: Component for rendering navigation menu items.
- `signItems.tsx`: Component for rendering sign-in + Register buttons.
- `userAvatar.tsx`: Component for displaying user avatar.

### /vessel
- `favoritesPanel`: Directory for managing favorite vessels.
- `info`: Directory for vessel information.
- `ownerPanel`: Directory for displaying information if user is ovner of this vessel.
- `userPanel`: Directory for managing user-related functions.
- `gallery.tsx`: A component for displaying vessel images.
- `index.tsx`: The main file for the `Vessel` component.
- `info.tsx`: A component for displaying information about ovner.
- `vesselStyle.ts`: Stylesheet for the `Vessel` component.

- `favoritesPanel`
    - `BackIcon.tsx`: An icon component for navigating back.
    - `favoritesPanel.tsx`: A component for managing favorite vessels (adding-removing).

- `info`
    - `contact.tsx`: A component for displaying contact information about ovner of this vessel.

- `ownerPanel`
    - `BackIcon.tsx`: An icon component for navigating back for owner.
    - `ownerPanel.tsx`: A component for managing owner-related functions.

- `userPanel`
    - `BackIcon.tsx`: An icon component for navigating back for user.
    - `userPanel.tsx`: A component for managing user-related functions.

## HomePage
### /aboutUs
  - `aboutUsStyle.ts`: Stylesheet for the About Us components.
  - `index.tsx`: The main file for the About Us components.

### /bookingSteps
  - `bookingStepsStyle.ts`: Stylesheet for the booking steps components.
  - `chooseLocation.tsx`: Component for displaying the location features during the booking process.
  - `commonStyles.tsx`: Common styles shared across booking steps components.
  - `index.tsx`: The main file for the booking steps components.
  - `pickupDate.tsx`: Component for displaying the pickup date features during the booking process.
  - `rentYourVessel.tsx`:  Component for displaying renings features renting the during the booking process.

### /mainFeed
  - `searchBoats`: Directory containing components related to searching for boats in the main feed on the home page.
    - `DatePicker.tsx`: Component for selecting a date in the boat search.
    - `index.tsx`: The main file for the search boats components.
    - `MainDescription.tsx`: Component for the main description in the boat search.
  - `button.tsx`: Component for a button in the main feed section.
  - `index.tsx`: The main file for the main feed components.
  - `mainFeedStyle.ts`: Styles for the main feed components.
  - `mainLogo.tsx`: Component for the main logo in the main feed section.
  
### /topVessels:
  - `Vessel`: Directory containing components related to individual vessels in the top vessels section.
    - `animatedButton.tsx`: Component made with MUI Zoom compoent to hanle user action connected with adding vessel to the faovroites.
    - `index.tsx`: The main file for the vessel components.
    - `stepperComponent.tsx`: Component for the stepper in the vessel section made with MUI.
    - `vesselStyle.ts`: Stylesheet for the vessel components.
  - `index.tsx`: The main file for the top vessels components.
  - `LoadingComponent.tsx`: Component to displey while fetching top vessel made with MUI skeletons.
  - `mainContainer.tsx`: Component for the main container in the top vessels section.
  
## Vessels
### /availableVessels: Directory containing components related to displaying available vessels.
  - `availableVessels.tsx`: Component for displaying available vessels.
  - `sortComponent.tsx`: Component for sorting the available vessels IAW possible options.
### /searchVessels: Directory containing components related to searching for vessels.
  - `desktopVesselsDateRange.tsx`: Component for selecting a date range on desktop for vessel search.
  - `location.tsx`: Component for selecting a location during vessel search.
  - `mobileVesselsDateRange.tsx`: Component for selecting a date range on mobile for vessel search.
  - `searchVesselsStyle.ts`: Stylesheet for the search vessels components.
  - `size.tsx`: Component for selecting vessel size during vessel search.
  - `type.tsx`: Component for selecting vessel type during vessel search.
  - `mobileFilter`: Directory containing components related to the mobile filter for vessel search.
    - `locationDrawer.tsx`: Component for the location filter in the mobile filter.
    - `mobileFilter.tsx`: Component for the mobile filter.
    - `sizeDrawer.tsx`: Component for the size filter in the mobile filter.
    - `typeDrawer.tsx`: Component for the type filter in the mobile filter.

## YourAccount
### /actionNav: Directory containing components related to the action navigation in the user's account.
  - `actionNav.tsx`: Component for the tab in YourAccount navigation in the user's account.
  - `actionNavStyle.ts`: Stylesheet for the action navigation component.
  - `addVessel`: Directory containing components related to adding a vessel in the user's account.
    - `addVessel.tsx`: Component for adding a vessel in the user's account.
        - `datePicker`: Directory containing components related to the date picker functionality in the add vessel feature.
          - `datePicker.tsx`: Component for the date picker in the add vessel feature.
          - `datePickerStyle.ts`: Stylesheet for the date picker component.
          - `dateRange.tsx`: Component for selecting a date range in the add vessel feature.
        - `newUserInfo.tsx`: Component for displaying information for the new user that a first vessel will be displayed on the home page in the top vessels section.
        - `vesDate.tsx`: Component for picking the date of the vessel user want to add.
        - `vesDescription.tsx`: Component for inputing description of the vessel user want to add.
        - `vesImages.tsx`: Component for adding the images of the vessel user want to add.
        - `vesLocation.tsx`: Component for inputing location where vessel will be available.
        - `vesName.tsx`: Component for added ves name.
        - `vesPrice.tsx`: Component for inputing ves price.
        - `vesSize.tsx`: Component for inputin ves size.
    - `favorite.tsx`: Component for managing favorite vessels in the user's account.
    - `yourVessels.tsx`: Component for managing the user's vessels in the user's account.
    - `datePicker`: Directory containing components related to date picker in the add vessel functionality.
      - `datePicker.tsx`: Component for the date picker in the add vessel functionality.
      - `datePickerStyle.ts`: Stylesheet for the date picker component.
      - `dateRange.tsx`: Component for selecting a date range in the add vessel functionality.

### /contact: Directory containing components related to contact information in the user's account.
  - `contact.tsx`: Component for displaying contact information in the user's account.
  - `common`: Directory containing common components used in the contact functionality.
    - `avatarModal.tsx`: Component for the avatar modal in the contact functionality.
    - `infoModal.tsx`: Component for the info modal in the contact functionality.
    - `passwordModal.tsx`: Component for the password modal in the contact functionality.
    - `BackIcon.tsx`: Component for the back icon used in the common components.
  - `yourAccountStyle.ts`: Stylesheet for the YourAccount components.
    - `hooks.ts`: [File] TypeScript file Redux Toolkit that includes:
        -  useSelector: This hook allows you to extract data from the Redux store state. It takes a selector function as an argument and returns the selected data from the store.
        -  useDispatch: This hook provides access to the Redux store's dispatch function, allowing you to dispatch actions to modify the store state.
    - `store.ts`: [File] TypeScript file for RTK. The store.ts define and configure the Redux store using Redux Toolkit.
- ## `features`: [Directory] Contains the files connected with: 
    - Slices -> to handle Global State (RTK);
    - baseUrl -> exported for the components that are fetching required data;
    - CONSTANTS -> vessel features.
- ## `helperFunctions`: [Directory] Contains helper functions to handle avatar displaying, authenticating user and handling main navigation;
- ## `pub`: [Directory] Contains the pub files, logos and pictures.
- ## `theme`: [Directory] Contains the theme files for MUI framework.
- ## `typings`: [Directory] Contains the types for the TS.
- ## `__tests__`: [Directory] Contains the test files made with JEST + RTL.
- ## `App.css`: [File] CSS file for the App component.
- ## `App.tsx`: [File] TypeScript file for the App component.
- ## `index.css`: [File] CSS file for the index.
- ## `index.tsx`: [File] TypeScript file for the index.