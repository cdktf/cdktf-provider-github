// https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret_repositories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DependabotOrganizationSecretRepositoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret_repositories#id DependabotOrganizationSecretRepositories#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the existing secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret_repositories#secret_name DependabotOrganizationSecretRepositories#secret_name}
  */
  readonly secretName: string;
  /**
  * An array of repository ids that can access the organization secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret_repositories#selected_repository_ids DependabotOrganizationSecretRepositories#selected_repository_ids}
  */
  readonly selectedRepositoryIds: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret_repositories github_dependabot_organization_secret_repositories}
*/
export class DependabotOrganizationSecretRepositories extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_dependabot_organization_secret_repositories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DependabotOrganizationSecretRepositories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DependabotOrganizationSecretRepositories to import
  * @param importFromId The id of the existing DependabotOrganizationSecretRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret_repositories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DependabotOrganizationSecretRepositories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_dependabot_organization_secret_repositories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret_repositories github_dependabot_organization_secret_repositories} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DependabotOrganizationSecretRepositoriesConfig
  */
  public constructor(scope: Construct, id: string, config: DependabotOrganizationSecretRepositoriesConfig) {
    super(scope, id, {
      terraformResourceType: 'github_dependabot_organization_secret_repositories',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.2.2',
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
    this._secretName = config.secretName;
    this._selectedRepositoryIds = config.selectedRepositoryIds;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // selected_repository_ids - computed: false, optional: false, required: true
  private _selectedRepositoryIds?: number[]; 
  public get selectedRepositoryIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
  }
  public set selectedRepositoryIds(value: number[]) {
    this._selectedRepositoryIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRepositoryIdsInput() {
    return this._selectedRepositoryIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      secret_name: cdktf.stringToTerraform(this._secretName),
      selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
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
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected_repository_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedRepositoryIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
