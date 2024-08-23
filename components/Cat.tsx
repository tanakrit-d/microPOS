import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { ViewStyle } from "react-native"

interface LogoProps {
    style?: ViewStyle
    color?: string
}

function Meow({ style, color = "#FFFFFF" }: LogoProps) {
    return (
        <Svg
            width="25%"
            height="25%"
            viewBox="0 0 2259 994"
            style={style}
            accessibilityLabel="Logo"
        >
            <Path
                fill="#FFFFFF"
                opacity={1}
                d="M1700 995H1V1h2259v994h-560m251.844-38.324c39.516 25.812 90.991 27.586 129.175-.761 5.042-3.743 10.812-6.812 14.989-11.35 9.42-10.232 18.184-21.09 22.797-34.6 1.275-3.735 3.66-4.46 7.754-3.613 14.787 3.062 29.606 6.299 44.578 8.06 25.342 2.979 47.16-5.973 62.88-25.455 7.403-9.176 11.675-21.772 14.544-33.508 4.457-18.234 3.23-36.985-.626-55.45-8.295-39.72-27.099-72.931-60.113-97.365-22.384-16.566-47.585-27.123-74.454-33.545-40.398-9.656-81.483-15.268-122.932-17.168-33.785-1.55-67.645-1.142-100.951 6.144-40.29 8.814-74.985 27.47-101.952 59.231-5.675 6.684-10.788 13.844-16.238 20.885-3.047-7.057-5.933-14.12-9.114-21.048-15.258-33.237-22.034-68.084-20.875-104.65 1.218-38.446 8.27-76.002 16.146-113.473 9.19-43.729 18.611-87.412 27.4-131.223 11.808-58.857 22.365-117.94 28.514-177.71 2.967-28.844 5.001-57.74 3.876-86.777-.761-19.671-2.674-39.117-9.282-57.866-9.236-26.206-27.507-35.763-53.976-27.265-23.598 7.575-44.887 19.973-65.534 33.413-45.349 29.52-86.762 64.081-125.796 101.34-33.477 31.954-65.947 65.002-98.045 98.353-29.664 30.821-57.634 63.212-83.57 97.286-5.297 6.96-10.212 14.21-15.295 21.315-21.726-11.525-44.798-18.538-68.53-22.673-29.63-5.161-59.432-9.725-89.34-12.768-26.473-2.694-53.253-4.74-79.79-3.85-36.386 1.218-72.776 4.548-108.97 8.683-39.951 4.565-79.398 12.13-115.762 30.476-6.275-8.8-12.265-17.796-18.85-26.333-36.325-47.101-75.737-91.517-116.942-134.39-49.902-51.922-101.902-101.5-160.3-143.917-25.444-18.482-51.992-35.173-81.778-46.018-8.535-3.107-17.272-5.193-26.403-3.652-15.679 2.646-24.243 13.601-30.133 27.042-8.484 19.364-10.733 40.093-11.75 60.902-1.89 38.696.525 77.272 5.446 115.627 4.53 35.307 9.47 70.593 15.537 105.663 7.791 45.03 16.787 89.855 25.454 134.731 8.35 43.234 18.933 86.055 22.834 130.088 3.586 40.487.729 80.03-15.464 117.87-3.996 9.336-8.041 18.65-12.111 28.086-.686-.475-.863-.54-.954-.668-1.058-1.491-2.075-3.013-3.156-4.487-14.524-19.799-31.743-36.68-53.024-49.219-29.231-17.222-61.016-25.776-94.662-28.058-27.95-1.896-55.925-2.827-83.848.057-19.196 1.982-38.343 4.482-57.474 7.034-27.42 3.656-54.425 9.117-80.18 19.629-24.977 10.194-47.593 24.067-65.215 44.733-28.358 33.257-41.03 72.164-39.06 115.71.917 20.238 7.444 38.352 21.608 53.592 16.47 17.722 37.083 22.856 59.942 20.37 14.32-1.558 28.494-4.732 42.603-7.78 4.213-.91 6.33.057 7.777 3.599 1.374 3.366 1.912 7.269 3.945 10.137 9.065 12.792 18.282 25.063 31.594 34.51 32.958 23.385 68.184 28.334 105.507 14.737 35.542-12.948 61.57-37.219 77.702-72.008.677.17 1.67.306 2.574.665 3.852 1.528 7.728 3.01 11.507 4.709 27.144 12.197 55.123 14.797 83.647 6.157 29.079-8.808 50.183-26.79 59.958-56.257 2.47-7.448 3.365-15.42 5.024-23.342h1203.13c.16 1.213.326 2.172.408 3.138 1.88 22.36 10.282 41.924 27.611 56.288 35.076 29.074 74.326 31.366 115.732 15.784 6.279-2.363 12.42-5.093 18.626-7.654 10.558 26.088 28.904 44.399 51.63 59.857z"
            />
            <Path
                fill="#050407"
                opacity={1}
                d="M1951.55 956.463c-22.432-15.245-40.778-33.556-51.336-59.644-6.207 2.56-12.347 5.291-18.626 7.654-41.406 15.582-80.656 13.29-115.732-15.784-17.329-14.364-25.73-33.928-27.611-56.288-.082-.966-.248-1.925-.408-3.138H534.707c-1.659 7.922-2.553 15.894-5.024 23.342-9.775 29.467-30.88 47.45-59.958 56.257-28.524 8.64-56.503 6.04-83.647-6.157-3.779-1.698-7.655-3.181-11.507-4.71-.904-.358-1.897-.494-2.574-.664-16.132 34.79-42.16 59.06-77.702 72.008-37.323 13.597-72.55 8.648-105.507-14.738-13.312-9.446-22.53-21.717-31.594-34.51-2.033-2.867-2.57-6.77-3.945-10.136-1.447-3.542-3.564-4.51-7.777-3.6-14.11 3.05-28.283 6.223-42.603 7.78-22.86 2.487-43.473-2.647-59.942-20.369-14.164-15.24-20.691-33.354-21.607-53.592-1.972-43.546 10.701-82.453 39.06-115.71 17.621-20.666 40.237-34.539 65.214-44.733 25.755-10.512 52.76-15.973 80.18-19.63 19.131-2.55 38.278-5.051 57.474-7.033 27.923-2.884 55.898-1.953 83.848-.057 33.646 2.282 65.43 10.836 94.662 28.058 21.281 12.538 38.5 29.42 53.024 49.22 1.08 1.473 2.098 2.995 3.156 4.486.09.127.268.193.954.668 4.07-9.435 8.115-18.75 12.11-28.086 16.194-37.84 19.051-77.383 15.465-117.87-3.9-44.033-14.483-86.854-22.834-130.088-8.667-44.876-17.663-89.7-25.454-134.731-6.068-35.07-11.008-70.356-15.537-105.663-4.92-38.355-7.336-76.93-5.445-115.627 1.016-20.809 3.265-41.538 11.75-60.902 5.889-13.44 14.453-24.396 30.132-27.042 9.131-1.54 17.868.545 26.403 3.652 29.786 10.845 56.334 27.536 81.779 46.018 58.397 42.418 110.397 91.995 160.299 143.917 41.205 42.873 80.617 87.289 116.942 134.39 6.585 8.537 12.575 17.534 18.85 26.333 36.364-18.347 75.81-25.911 115.762-30.476 36.194-4.135 72.584-7.465 108.97-8.684 26.537-.888 53.317 1.157 79.79 3.85 29.908 3.044 59.71 7.608 89.34 12.77 23.732 4.134 46.804 11.147 68.53 22.672 5.083-7.105 9.998-14.355 15.296-21.315 25.935-34.074 53.905-66.465 83.569-97.286 32.098-33.35 64.568-66.4 98.045-98.354 39.034-37.258 80.447-71.819 125.796-101.339 20.647-13.44 41.936-25.838 65.534-33.413 26.47-8.498 44.74 1.06 53.976 27.265 6.608 18.75 8.52 38.195 9.282 57.866 1.125 29.037-.91 57.933-3.876 86.776-6.149 59.772-16.706 118.854-28.514 177.711-8.789 43.81-18.21 87.494-27.4 131.223-7.875 37.471-14.928 75.027-16.146 113.472-1.16 36.567 5.617 71.414 20.875 104.651 3.18 6.928 6.067 13.991 9.114 21.048 5.45-7.04 10.563-14.201 16.238-20.885 26.967-31.76 61.661-50.417 101.952-59.231 33.306-7.286 67.166-7.693 100.95-6.144 41.45 1.9 82.535 7.512 122.933 17.168 26.869 6.422 52.07 16.98 74.454 33.545 33.014 24.434 51.818 57.644 60.113 97.365 3.855 18.465 5.083 37.216.626 55.45-2.869 11.736-7.141 24.332-14.545 33.508-15.719 19.482-37.537 28.434-62.879 25.454-14.972-1.76-29.79-4.997-44.578-8.059-4.095-.847-6.479-.122-7.754 3.613-4.613 13.51-13.378 24.368-22.797 34.6-4.177 4.538-9.947 7.607-14.989 11.35-38.184 28.347-89.66 26.573-129.47.548m-475.195-234.617c27.888-30.35 39.536-66.713 39.579-107.315.001-1.554-.935-3.567-2.109-4.595-19.016-16.66-39.7-30.74-63.396-39.969-38.92-15.157-77.73-13.433-116.519.737-33.721 12.319-60.799 32.53-78 64.692-13.214 24.703-18.599 51.42-19.902 79.101-.113 2.4 1.098 5.561 2.804 7.24 22.177 21.814 48.508 36.396 78.635 44.007 6.895 1.742 14.012 2.6 21.028 3.865l.295-1.265c-35.664-21.862-50.59-53.422-44.927-95.014 15.079 6.336 25.988 3.864 30.986-7.654 1.778-4.095 2.004-9.425 1.277-13.923-1.316-8.132-7.687-12.284-15.13-14.852 27.466-35.976 78.108-44.588 116.708-19.929 18.386 11.746 30.724 28.35 36.674 49.314 7.393 26.046 3.256 50.54-10.986 73.807 8.979-4.029 15.652-10.993 22.983-18.247m-490.339-17.41c-4.91 28.682-20.734 49.66-45.602 64.31 37.497-5.567 69.611-21.665 96.468-48.166 1.176-1.16 1.88-3.51 1.716-5.2-.972-10.097-1.806-20.242-3.524-30.227-8.895-51.694-35.775-89.771-84.895-110.607-30.787-13.058-62.646-18.798-96.008-13.015-36.248 6.283-66.275 24.7-93.551 48.34-1.273 1.103-2.192 3.41-2.134 5.118.27 7.979.463 16.01 1.549 23.903 6.317 45.926 28.096 82.176 67.765 107.035 1.254.785 2.64 1.358 3.965 2.03-7.813-11.052-13.86-22.541-17.171-35.41-3.314-12.876-3.6-25.79-1.081-38.937 15.24 6.104 26.003 3.066 31.228-8.523 4.941-10.957-.134-21.169-14.104-28.383 21.878-30.876 65.949-42.263 103.436-26.727 36.074 14.95 58.49 55.237 51.943 94.458z"
            />
            <Path
                fill="#FCFCFC"
                opacity={1}
                d="M1476.116 722.111c-7.093 6.989-13.766 13.953-22.745 17.982 14.242-23.267 18.379-47.761 10.986-73.807-5.95-20.963-18.288-37.568-36.674-49.314-38.6-24.659-89.242-16.047-116.709 19.93 7.444 2.567 13.815 6.719 15.13 14.851.728 4.498.502 9.828-1.276 13.923-4.998 11.518-15.907 13.99-30.986 7.654-5.662 41.592 9.263 73.152 44.927 95.014l-.295 1.265c-7.016-1.265-14.133-2.123-21.028-3.865-30.127-7.61-56.458-22.193-78.635-44.007-1.706-1.679-2.917-4.84-2.804-7.24 1.303-27.682 6.688-54.398 19.901-79.101 17.202-32.161 44.28-52.373 78.001-64.692 38.788-14.17 77.6-15.894 116.519-.737 23.695 9.228 44.38 23.31 63.396 39.969 1.174 1.028 2.11 3.041 2.109 4.595-.043 40.602-11.69 76.965-39.817 107.58z"
            />
            <Path
                fill="#FEFEFE"
                opacity={1}
                d="M986.078 703.997c6.483-38.783-15.932-79.07-52.006-94.02-37.487-15.536-81.558-4.149-103.436 26.727 13.97 7.214 19.045 17.426 14.104 28.383-5.225 11.589-15.988 14.627-31.228 8.523-2.52 13.147-2.233 26.06 1.08 38.938 3.313 12.868 9.36 24.357 17.172 35.409-1.325-.672-2.711-1.245-3.965-2.03-39.669-24.86-61.448-61.109-67.765-107.035-1.086-7.893-1.278-15.924-1.549-23.903-.058-1.708.86-4.015 2.134-5.119 27.276-23.64 57.303-42.056 93.55-48.339 33.363-5.783 65.222-.043 96.009 13.015 49.12 20.836 76 58.913 84.895 110.607 1.718 9.985 2.552 20.13 3.524 30.227.163 1.69-.54 4.04-1.716 5.2-26.857 26.5-58.97 42.6-96.468 48.167 24.868-14.65 40.692-35.629 45.665-64.75z"
            />
        </Svg>
    )
}

export default Meow