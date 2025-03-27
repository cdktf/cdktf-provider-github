// https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_organization_oidc_subject_claim_customization_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_organization_oidc_subject_claim_customization_template#id ActionsOrganizationOidcSubjectClaimCustomizationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of OpenID Connect claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_organization_oidc_subject_claim_customization_template#include_claim_keys ActionsOrganizationOidcSubjectClaimCustomizationTemplate#include_claim_keys}
  */
  readonly includeClaimKeys: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template}
*/
export class ActionsOrganizationOidcSubjectClaimCustomizationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_organization_oidc_subject_claim_customization_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActionsOrganizationOidcSubjectClaimCustomizationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionsOrganizationOidcSubjectClaimCustomizationTemplate to import
  * @param importFromId The id of the existing ActionsOrganizationOidcSubjectClaimCustomizationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_organization_oidc_subject_claim_customization_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionsOrganizationOidcSubjectClaimCustomizationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_oidc_subject_claim_customization_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template} Resource
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
        providerVersion: '6.6.0',
        providerVersionConstraint: '~> 6.0'
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_claim_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeClaimKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
