"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, X, FileText, CheckCircle2, Loader2, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import procesarService from "@/services/procesar.service"
import ErrorDialog from "./error-dialog"

interface FileWithStatus {
    file: File
    status: "idle" | "uploading" | "success" | "error"
}

export function FileUpload() {
    const [files, setFiles] = useState<FileWithStatus[]>([]);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [msgError, setMsgError] = useState<string>("");

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.map((file) => ({
            file,
            status: "idle" as const,
        }))
        setFiles(newFiles)
    }, [])

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index))
    }

    const handleUpload = async () => {
        if (files.length === 0) return

        setIsProcessing(true)

        const updatedFiles = [...files]

        if (updatedFiles[0].status === "idle" || updatedFiles[0].status === "error") {
            try {
                updatedFiles[0].status = "uploading"
                setFiles([...updatedFiles])

                const formData = new FormData()
                formData.append("file", updatedFiles[0].file)

                const data = await procesarService(formData)

                console.log("respuesta del servidor:", data)

                updatedFiles[0].status = "success"
            } catch (error) {
                console.error("Error subiendo archivo:", error)
                updatedFiles[0].status = "error"
                setMsgError("Informacion del error: " + error);
                setIsOpen(true);
            }
        }

        setFiles([...updatedFiles])

        setIsProcessing(false)
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "text/csv": [".csv"],
            "application/vnd.ms-excel": [".csv"],
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
        },
        maxFiles: 1,
        multiple: false,
        disabled: isProcessing,
    })

    const hasFilesToUpload = files.some(f => f.status === "idle" || f.status === "error")

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <ErrorDialog open={isOpen} onOpenChange={setIsOpen} msgError={msgError}/>
            <div
                {...getRootProps()}
                className={cn(
                    "relative group cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-300 ease-in-out p-12 flex flex-col items-center justify-center gap-4",
                    "bg-background/50 backdrop-blur-sm",
                    isDragActive
                        ? "border-primary bg-primary/5 ring-4 ring-primary/10"
                        : "border-muted-foreground/20 hover:border-primary/50 hover:bg-muted/50",
                    isProcessing && "opacity-50 cursor-not-allowed pointer-events-none"
                )}
            >
                <input {...getInputProps()} />

                <div className={cn(
                    "p-4 rounded-full bg-muted transition-transform duration-300 group-hover:scale-110",
                    isDragActive && "scale-110 bg-primary/20 text-primary"
                )}>
                    <Upload className={cn("size-8 text-muted-foreground", isDragActive && "text-primary")} />
                </div>

                <div className="text-center space-y-2">
                    <p className="text-lg font-semibold tracking-tight">
                        {isDragActive ? "Suelta tus archivos aquí" : "Arrastra tus archivos de datos"}
                    </p>
                    <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                        Soporta archivos .csv y .xlsx para el análisis.
                    </p>
                </div>

                <Button variant="outline" className="mt-2 pointer-events-none">
                    Seleccionar Archivos
                </Button>
            </div>

            {/* seccion de la lista de los archivos */}
            {files.length > 0 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-between px-1">
                        <h3 className="text-sm font-medium text-muted-foreground">Archivos seleccionados</h3>
                        {hasFilesToUpload && !isProcessing && (
                            <Button
                                onClick={handleUpload}
                                size="sm"
                                className="gap-2 h-8 px-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-95"
                            >
                                <Send className="size-3.5" />
                                Procesar ahora
                            </Button>
                        )}
                        {isProcessing && (
                            <div className="flex items-center gap-2 text-sm text-primary font-medium animate-pulse">
                                <Loader2 className="size-4 animate-spin" />
                                Procesando...
                            </div>
                        )}
                    </div>

                    <div className="grid gap-3">
                        {files.map((fileStatus, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "group flex items-center justify-between p-3 rounded-xl border border-border/50 bg-background/30 backdrop-blur-md transition-all",
                                    fileStatus.status === "uploading" && "border-primary/50 bg-primary/5",
                                    fileStatus.status === "error" && "border-destructive/50 bg-destructive/5"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "p-2 rounded-lg",
                                        fileStatus.status === "success" ? "bg-emerald-500/10 text-emerald-500" :
                                            fileStatus.status === "error" ? "bg-destructive/10 text-destructive" :
                                                "bg-primary/10 text-primary"
                                    )}>
                                        <FileText className="size-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium truncate max-w-[200px] md:max-w-md">
                                            {fileStatus.file.name}
                                        </span>
                                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                            {(fileStatus.file.size / 1024).toFixed(1)} KB
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {fileStatus.status === "uploading" && (
                                        <Loader2 className="size-5 text-primary animate-spin" />
                                    )}
                                    {fileStatus.status === "success" && (
                                        <CheckCircle2 className="size-5 text-emerald-500" />
                                    )}
                                    {fileStatus.status === "error" && (
                                        <X className="size-5 text-destructive" />
                                    )}
                                    {!isProcessing && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                removeFile(index)
                                            }}
                                            className="p-1.5 rounded-lg hover:bg-destructive/10 hover:text-destructive text-muted-foreground transition-colors"
                                        >
                                            <X className="size-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
