import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Button Examples Section */}
        <div className="w-full space-y-6">
          <Typography className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            MUI Buttons Styled with Tailwind CSS
          </Typography>

          {/* Primary Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              Primary Blue
            </Button>

            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              Primary Green
            </Button>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              Primary Red
            </Button>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              Primary Purple
            </Button>
          </div>

          {/* Outlined Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg transition-all duration-200 font-semibold">
              Outlined Blue
            </Button>

            <Button className="border-2 border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 px-6 py-3 rounded-lg transition-all duration-200 font-semibold">
              Outlined Green
            </Button>

            <Button className="border-2 border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 px-6 py-3 rounded-lg transition-all duration-200 font-semibold">
              Outlined Red
            </Button>
          </div>

          {/* Gradient Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl font-semibold">
              Gradient Pink
            </Button>

            <Button className="bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl font-semibold">
              Gradient Blue
            </Button>

            <Button className="bg-linear-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl font-semibold">
              Gradient Purple
            </Button>
          </div>

          {/* Rounded Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
              Rounded Full
            </Button>

            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
              Pill Button
            </Button>
          </div>

          {/* Size Variants */}
          <div className="flex flex-wrap items-center gap-4">
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md text-sm transition-all duration-200">
              Small
            </Button>

            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md transition-all duration-200">
              Medium
            </Button>

            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-md text-lg transition-all duration-200">
              Large
            </Button>
          </div>

          {/* Special Effects */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Hover Scale
            </Button>

            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-all duration-200 border-2 border-transparent hover:border-emerald-700 shadow-lg">
              Border Effect
            </Button>

            <Button className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-lg transition-all duration-200 opacity-90 hover:opacity-100 shadow-lg">
              Opacity Effect
            </Button>
          </div>

          {/* Disabled State */}
          <div className="flex flex-wrap gap-4">
            <Button
              disabled
              className="bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed opacity-50"
            >
              Disabled Button
            </Button>
          </div>
        </div>

        {/* Other Components */}
        <div className="w-full mt-8 space-y-6">
          <Typography className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Other MUI Components
          </Typography>

          {/* MUI TextField with Tailwind styling */}
          <TextField
            className="w-full"
            placeholder="Enter text..."
            slotProps={{
              input: {
                className:
                  "rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
              },
            }}
          />

          {/* MUI Card with Tailwind styling */}
          <Card className="w-full p-4 bg-linear-to-r from-purple-500 to-pink-500 shadow-lg rounded-xl">
            <CardContent className="p-0">
              <Typography className="text-white text-xl font-bold mb-2">
                MUI + Tailwind CSS
              </Typography>
              <Typography className="text-white/90">
                This card uses MUI components styled with Tailwind CSS classes!
              </Typography>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
