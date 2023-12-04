# `dependabotOrganizationSecret` Submodule <a name="`dependabotOrganizationSecret` Submodule" id="@cdktf/provider-github.dependabotOrganizationSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DependabotOrganizationSecret <a name="DependabotOrganizationSecret" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/dependabot_organization_secret github_dependabot_organization_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/dependabotorganizationsecret"

dependabotorganizationsecret.NewDependabotOrganizationSecret(scope Construct, id *string, config DependabotOrganizationSecretConfig) DependabotOrganizationSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig">DependabotOrganizationSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig">DependabotOrganizationSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetEncryptedValue">ResetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetPlaintextValue">ResetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetSelectedRepositoryIds">ResetSelectedRepositoryIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEncryptedValue` <a name="ResetEncryptedValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetEncryptedValue"></a>

```go
func ResetEncryptedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetId"></a>

```go
func ResetId()
```

##### `ResetPlaintextValue` <a name="ResetPlaintextValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetPlaintextValue"></a>

```go
func ResetPlaintextValue()
```

##### `ResetSelectedRepositoryIds` <a name="ResetSelectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetSelectedRepositoryIds"></a>

```go
func ResetSelectedRepositoryIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DependabotOrganizationSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/dependabotorganizationsecret"

dependabotorganizationsecret.DependabotOrganizationSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/dependabotorganizationsecret"

dependabotorganizationsecret.DependabotOrganizationSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/dependabotorganizationsecret"

dependabotorganizationsecret.DependabotOrganizationSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/dependabotorganizationsecret"

dependabotorganizationsecret.DependabotOrganizationSecret_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DependabotOrganizationSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DependabotOrganizationSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DependabotOrganizationSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/dependabot_organization_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DependabotOrganizationSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValueInput">EncryptedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValueInput">PlaintextValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValue">EncryptedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValue">PlaintextValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `EncryptedValueInput`<sup>Optional</sup> <a name="EncryptedValueInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValueInput"></a>

```go
func EncryptedValueInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PlaintextValueInput`<sup>Optional</sup> <a name="PlaintextValueInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValueInput"></a>

```go
func PlaintextValueInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIdsInput"></a>

```go
func SelectedRepositoryIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `EncryptedValue`<sup>Required</sup> <a name="EncryptedValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValue"></a>

```go
func EncryptedValue() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PlaintextValue`<sup>Required</sup> <a name="PlaintextValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValue"></a>

```go
func PlaintextValue() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIds"></a>

```go
func SelectedRepositoryIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DependabotOrganizationSecretConfig <a name="DependabotOrganizationSecretConfig" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v12/dependabotorganizationsecret"

&dependabotorganizationsecret.DependabotOrganizationSecretConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecretName: *string,
	Visibility: *string,
	EncryptedValue: *string,
	Id: *string,
	PlaintextValue: *string,
	SelectedRepositoryIds: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.secretName">SecretName</a></code> | <code>*string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.visibility">Visibility</a></code> | <code>*string</code> | Configures the access that repositories have to the organization secret. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.encryptedValue">EncryptedValue</a></code> | <code>*string</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.plaintextValue">PlaintextValue</a></code> | <code>*string</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>*[]*f64</code> | An array of repository ids that can access the organization secret. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/dependabot_organization_secret#secret_name DependabotOrganizationSecret#secret_name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Configures the access that repositories have to the organization secret.

Must be one of 'all', 'private' or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/dependabot_organization_secret#visibility DependabotOrganizationSecret#visibility}

---

##### `EncryptedValue`<sup>Optional</sup> <a name="EncryptedValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.encryptedValue"></a>

```go
EncryptedValue *string
```

- *Type:* *string

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/dependabot_organization_secret#encrypted_value DependabotOrganizationSecret#encrypted_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlaintextValue`<sup>Optional</sup> <a name="PlaintextValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.plaintextValue"></a>

```go
PlaintextValue *string
```

- *Type:* *string

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/dependabot_organization_secret#plaintext_value DependabotOrganizationSecret#plaintext_value}

---

##### `SelectedRepositoryIds`<sup>Optional</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.selectedRepositoryIds"></a>

```go
SelectedRepositoryIds *[]*f64
```

- *Type:* *[]*f64

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/dependabot_organization_secret#selected_repository_ids DependabotOrganizationSecret#selected_repository_ids}

---



