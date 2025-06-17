import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, GraduationCap, FileText } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BookOpen className="h-8 w-8" />
              About Iqra University Academic Policy Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-6">
              This AI-powered chatbot is designed to help Iqra University students quickly find information about
              academic policies, admission requirements, and university regulations. It's built using advanced RAG
              (Retrieval-Augmented Generation) technology to provide accurate, contextual answers based on the official
              Academic Policy Manual.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <GraduationCap className="h-5 w-5" />
                    What You Can Ask About
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Admission requirements for all programs</li>
                    <li>• Grading system and CGPA calculations</li>
                    <li>• Registration and course enrollment</li>
                    <li>• Examination rules and procedures</li>
                    <li>• Attendance requirements</li>
                    <li>• Scholarship opportunities</li>
                    <li>• Disciplinary policies</li>
                    <li>• Thesis and research requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5" />
                    How It Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Ask questions in natural language</li>
                    <li>• Get instant, accurate responses</li>
                    <li>• Information sourced from official documents</li>
                    <li>• Available 24/7 for your convenience</li>
                    <li>• No registration required</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-blue-800">
                  <FileText className="h-5 w-5" />
                  Coverage Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Admissions</h4>
                    <ul className="space-y-1 text-blue-600">
                      <li>• Bachelor's Programs</li>
                      <li>• Master's Programs</li>
                      <li>• M.Phil Programs</li>
                      <li>• PhD Programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Academic Life</h4>
                    <ul className="space-y-1 text-blue-600">
                      <li>• Registration Process</li>
                      <li>• Course Requirements</li>
                      <li>• Grading System</li>
                      <li>• Academic Progression</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Student Services</h4>
                    <ul className="space-y-1 text-blue-600">
                      <li>• Scholarships</li>
                      <li>• Internship Requirements</li>
                      <li>• Research Guidelines</li>
                      <li>• Disciplinary Policies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700">Start Chatting</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}