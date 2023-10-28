# `github_codespaces_organization_secret_repositories`

Refer to the Terraform Registory for docs: [`github_codespaces_organization_secret_repositories`](https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/codespaces_organization_secret_repositories).

# `codespacesOrganizationSecretRepositories` Submodule <a name="`codespacesOrganizationSecretRepositories` Submodule" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodespacesOrganizationSecretRepositories <a name="CodespacesOrganizationSecretRepositories" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/codespaces_organization_secret_repositories github_codespaces_organization_secret_repositories}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/codespacesorganizationsecretrepositories"

codespacesorganizationsecretrepositories.NewCodespacesOrganizationSecretRepositories(scope Construct, id *string, config CodespacesOrganizationSecretRepositoriesConfig) CodespacesOrganizationSecretRepositories
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig">CodespacesOrganizationSecretRepositoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig">CodespacesOrganizationSecretRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CodespacesOrganizationSecretRepositories resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/codespacesorganizationsecretrepositories"

codespacesorganizationsecretrepositories.CodespacesOrganizationSecretRepositories_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/codespacesorganizationsecretrepositories"

codespacesorganizationsecretrepositories.CodespacesOrganizationSecretRepositories_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/codespacesorganizationsecretrepositories"

codespacesorganizationsecretrepositories.CodespacesOrganizationSecretRepositories_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/codespacesorganizationsecretrepositories"

codespacesorganizationsecretrepositories.CodespacesOrganizationSecretRepositories_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CodespacesOrganizationSecretRepositories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CodespacesOrganizationSecretRepositories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CodespacesOrganizationSecretRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/codespaces_organization_secret_repositories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CodespacesOrganizationSecretRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>*[]*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIdsInput"></a>

```go
func SelectedRepositoryIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIds"></a>

```go
func SelectedRepositoryIds() *[]*f64
```

- *Type:* *[]*f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodespacesOrganizationSecretRepositoriesConfig <a name="CodespacesOrganizationSecretRepositoriesConfig" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/codespacesorganizationsecretrepositories"

&codespacesorganizationsecretrepositories.CodespacesOrganizationSecretRepositoriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecretName: *string,
	SelectedRepositoryIds: *[]*f64,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.secretName">SecretName</a></code> | <code>*string</code> | Name of the existing secret. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>*[]*f64</code> | An array of repository ids that can access the organization secret. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/codespaces_organization_secret_repositories#id CodespacesOrganizationSecretRepositories#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Name of the existing secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/codespaces_organization_secret_repositories#secret_name CodespacesOrganizationSecretRepositories#secret_name}

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds"></a>

```go
SelectedRepositoryIds *[]*f64
```

- *Type:* *[]*f64

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/codespaces_organization_secret_repositories#selected_repository_ids CodespacesOrganizationSecretRepositories#selected_repository_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/codespaces_organization_secret_repositories#id CodespacesOrganizationSecretRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



