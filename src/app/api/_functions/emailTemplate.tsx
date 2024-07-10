import { FormType } from "@/app/_components/RecruitForm/formSchema"

export const emailTemplate = (form: Omit<FormType, "file">) => {
  const { name, email, phone, message } = form

  return `
		<table width="100%" height="100%" style="min-width:348px" border="0" cellspacing="0" cellpadding="0" lang="en">
			<tbody>
				<tr height="32" style="height:32px">
					<td></td>
				</tr>
				<tr align="center">
					<td>
						<div>
							<div></div>
						</div>
						<table border="0" cellspacing="0" cellpadding="0" style="padding-bottom:20px;max-width:516px;min-width:220px">
							<tbody>
								<tr>
									<td width="8" style="width:8px"></td>
									<td>
										<div
											style="border-style:solid;border-width:thin;border-color:#dadce0;border-radius:8px;padding:40px 20px"
											align="center" class="m_8187743983119977419mdv2rw">
											<img src="https://i.ibb.co/NTLxC4V/baixados.png" height="24" aria-hidden="true" style="margin-bottom:16px" alt="CNA" class="CToWUd" data-bit="iit">
											<div
												style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;border-bottom:thin solid #dadce0;color:rgba(0,0,0,0.87);line-height:32px;text-align:center;word-break:break-word">
											</div>
											<div
												style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:16px;color:rgba(0,0,0,0.87);line-height:20px;padding-top:20px;text-align:justify">
												<div style="margin-bottom:16px;">
												<div style="font-size:19px; font-weight: bold;margin-bottom:8px;">Nome: </div>
													<div>
														${name}
													</div>
												</div>

												<div style="margin-bottom:16px;">
												<div style="font-size:19px; font-weight: bold;margin-bottom:8px;">E-mail: </div>
													<div>
														${email}
													</div>
												</div>

												<div style="margin-bottom:16px;">
												<div style="font-size:19px; font-weight: bold;margin-bottom:8px;">Celular: </div>
													<div>
														${phone}
													</div>
												</div>

												<div style="margin-bottom:16px;">
												<div style="font-size:19px; font-weight: bold;margin-bottom:8px;">Carta de apresentação: </div>
													<div>
														${message !== "" ? message : "Não foi escrita nenhuma carta de apresentação."}
													</div>
												</div>
											</div>
										</div>
									</td>
									<td width="8" style="width:8px"></td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	`
}
