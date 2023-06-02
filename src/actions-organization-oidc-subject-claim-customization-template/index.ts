/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.26.0/docs/resources/actions_organization_oidc_subject_claim_customization_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/resources/actions_organization_oidc_subject_claim_customization_template#id ActionsOrganizationOidcSubjectClaimCustomizationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of OpenID Connect claims.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/resources/actions_organization_oidc_subject_claim_customization_template#include_claim_keys ActionsOrganizationOidcSubjectClaimCustomizationTemplate#include_claim_keys}
  */
  readonly includeClaimKeys: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/resources/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template}
*/
export class ActionsOrganizationOidcSubjectClaimCustomizationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_organization_oidc_subject_claim_customization_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/resources/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_organization_oidc_subject_claim_customization_template',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.26.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._includeClaimKeys = config.includeClaimKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_claim_keys - computed: false, optional: false, required: true
  private _includeClaimKeys?: string[]; 
  public get includeClaimKeys() {
    return this.getListAttribute('include_claim_keys');
  }
  public set includeClaimKeys(value: string[]) {
    this._includeClaimKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeClaimKeysInput() {
    return this._includeClaimKeys;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_claim_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeClaimKeys),
    };
  }
}
