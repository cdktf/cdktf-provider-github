# `github_repository_dependabot_security_updates`

Refer to the Terraform Registory for docs: [`github_repository_dependabot_security_updates`](https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_dependabot_security_updates).

# `repositoryDependabotSecurityUpdates` Submodule <a name="`repositoryDependabotSecurityUpdates` Submodule" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryDependabotSecurityUpdates <a name="RepositoryDependabotSecurityUpdates" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_dependabot_security_updates github_repository_dependabot_security_updates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/repositorydependabotsecurityupdates"

repositorydependabotsecurityupdates.NewRepositoryDependabotSecurityUpdates(scope Construct, id *string, config RepositoryDependabotSecurityUpdatesConfig) RepositoryDependabotSecurityUpdates
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig">RepositoryDependabotSecurityUpdatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig">RepositoryDependabotSecurityUpdatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryDependabotSecurityUpdates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/repositorydependabotsecurityupdates"

repositorydependabotsecurityupdates.RepositoryDependabotSecurityUpdates_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/repositorydependabotsecurityupdates"

repositorydependabotsecurityupdates.RepositoryDependabotSecurityUpdates_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/repositorydependabotsecurityupdates"

repositorydependabotsecurityupdates.RepositoryDependabotSecurityUpdates_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/repositorydependabotsecurityupdates"

repositorydependabotsecurityupdates.RepositoryDependabotSecurityUpdates_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RepositoryDependabotSecurityUpdates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RepositoryDependabotSecurityUpdates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RepositoryDependabotSecurityUpdates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_dependabot_security_updates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryDependabotSecurityUpdates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryDependabotSecurityUpdatesConfig <a name="RepositoryDependabotSecurityUpdatesConfig" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/repositorydependabotsecurityupdates"

&repositorydependabotsecurityupdates.RepositoryDependabotSecurityUpdatesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Repository: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The state of the automated security fixes. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.repository">Repository</a></code> | <code>*string</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_dependabot_security_updates#id RepositoryDependabotSecurityUpdates#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The state of the automated security fixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_dependabot_security_updates#enabled RepositoryDependabotSecurityUpdates#enabled}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_dependabot_security_updates#repository RepositoryDependabotSecurityUpdates#repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_dependabot_security_updates#id RepositoryDependabotSecurityUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



